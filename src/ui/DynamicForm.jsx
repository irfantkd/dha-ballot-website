import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import FormField from './FormField';
import ConfirmationDialog from './ConfirmationDialog';

export default function DynamicForm({
  title,
  subtitle,
  fields = [],
  onSubmit,
  onCancel,
  submitText = 'Save',
  cancelText = 'Discard',
  submitButtonProps = {},
  cancelButtonProps = {},
  initialData = {},
  className = '',
  loading = false,
  confirmSubmit = {
    title: 'Save Changes?',
    message: 'Are you sure you want to save these changes?',
  },
  confirmCancel = {
    title: 'Discard Changes?',
    message: 'Are you sure you want to discard your changes? This action cannot be undone.',
  },
  showConfirmation = true,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    type: null,
    data: null,
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: initialData,
    mode: 'onChange',
  });

  const getValidationRules = (field) => {
    const rules = {};
    if (field.required) {
      rules.required = `${field.label} is required`;
    }
    if (field.validation) {
      Object.assign(rules, field.validation);
    }
    return rules;
  };

  const onSubmitHandler = async (data) => {
    if (showConfirmation) {
      setConfirmDialog({
        isOpen: true,
        type: 'submit',
        data,
      });
    } else {
      await executeSubmit(data);
    }
  };

  const executeSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (showConfirmation) {
      setConfirmDialog({
        isOpen: true,
        type: 'cancel',
        data: null,
      });
    } else {
      executeCancel();
    }
  };

  const executeCancel = () => {
    onCancel && onCancel();
    reset();
  };

  const handleConfirmation = async () => {
    setConfirmDialog({ isOpen: false, type: null, data: null });
    if (confirmDialog.type === 'submit') {
      await executeSubmit(confirmDialog.data);
    } else if (confirmDialog.type === 'cancel') {
      executeCancel();
    }
  };

  const handleDialogClose = () => {
    setConfirmDialog({ isOpen: false, type: null, data: null });
  };

  const getDialogContent = () => {
    switch (confirmDialog.type) {
      case 'submit':
        return confirmSubmit;
      case 'cancel':
        return confirmCancel;
      default:
        return { title: 'Are you sure?', message: null };
    }
  };

  const dialogContent = getDialogContent();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className={`rounded-lg bg-white p-2 sm:p-6 border-2   ${className}`}>
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-600">{subtitle}</p>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields
              .filter((field) => field && typeof field === 'object' && field.name)
              .map((field) => (
                <FormField
                  key={field.name}
                  field={field}
                  register={register}
                  control={control}
                  validationRules={getValidationRules(field)}
                  error={errors[field.name]}
                  watch={watch}
                  setValue={setValue}
                />
              ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={handleCancel}
              disabled={isSubmitting}
              {...cancelButtonProps}
              className="bg-[#6C2C2C] text-white hover:bg-[#5a2424] focus:ring-[#6C2C2C] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {cancelText}
            </Button>
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting || loading}
              disabled={isSubmitting || loading}
              {...submitButtonProps}
              className="bg-[#333333] text-white hover:bg-[#5a2424] focus:ring-[#333333] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitText}
            </Button>
          </div>
        </form>
      </div>

      {showConfirmation && (
        <ConfirmationDialog
          isOpen={confirmDialog.isOpen}
          onClose={handleDialogClose}
          onConfirm={handleConfirmation}
          title={dialogContent.title}
          message={dialogContent.message}
        />
      )}
    </div>
  );
}
