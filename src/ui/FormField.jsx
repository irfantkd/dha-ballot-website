// import React from 'react';

// export default function FormField({ 
//   field, 
//   register, 
//   validationRules, 
//   error, 
//   watch, 
//   setValue 
// }) {
//   const baseInputStyles = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors";
//   const errorStyles = error ? "border-red-500 focus:ring-red-500" : "";

//   const renderField = () => {
//     switch (field.type) {
//       case 'select':
//         return (
//           <select
//             id={field.name}
//             {...register(field.name, validationRules)}
//             className={`${baseInputStyles} ${errorStyles}`}
//           >
//             <option value="">Select {field.label}</option>
//             {field.options?.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         );
      
//       case 'textarea':
//         return (
//           <textarea
//             id={field.name}
//             {...register(field.name, validationRules)}
//             placeholder={field.placeholder}
//             rows={field.rows || 4}
//             className={`${baseInputStyles} ${errorStyles} resize-vertical`}
//           />
//         );
      
//       case 'checkbox':
//         return (
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id={field.name}
//               {...register(field.name, validationRules)}
//               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label htmlFor={field.name} className="ml-2 text-sm text-gray-700">
//               {field.checkboxLabel || field.label}
//             </label>
//           </div>
//         );
      
//       default:
//         return (
//           <input
//             type={field.type || 'text'}
//             id={field.name}
//             {...register(field.name, validationRules)}
//             placeholder={field.placeholder}
//             className={`${baseInputStyles} ${errorStyles}`}
//           />
//         );
//     }
//   };

//   return (
//     <div className={field.width === 'full' ? 'col-span-2' : 'col-span-1'}>
//       {field.type !== 'checkbox' && (
//         <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
//           {field.label}
//           {field.required && <span className="text-red-500 ml-1">*</span>}
//         </label>
//       )}
//       {renderField()}
//       {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
//     </div>
//   );
// }


import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

export default function FormField({
  field,
  control,
  register,
  validationRules,
  error,
  watch,
  setValue,
}) {
  const baseInputStyles =
    'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

  const renderField = () => {
    switch (field.type) {
      case 'select':
        return (
          <Controller
            name={field.name}
            control={control}
            rules={validationRules}
            render={({ field: controllerField }) => (
              <Select
                {...controllerField}
                options={field.options}
                placeholder={`Select ${field.label}`}
                className="react-select-container"
                classNamePrefix="react-select"
                onChange={(selectedOption) => {
                  controllerField.onChange(selectedOption);
                  if (field.onChange) field.onChange(selectedOption);
                }}
                value={controllerField.value}
              />
            )}
          />
        );

      case 'textarea':
        return (
          <Controller
            name={field.name}
            control={control}
            rules={validationRules}
            render={({ field: controllerField }) => (
              <textarea
                {...controllerField}
                placeholder={field.placeholder}
                rows={field.rows || 4}
                className={`${baseInputStyles} ${errorStyles} resize-vertical`}
              />
            )}
          />
        );

      case 'checkbox':
        return (
          <Controller
            name={field.name}
            control={control}
            rules={validationRules}
            render={({ field: controllerField }) => (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={field.name}
                  checked={controllerField.value}
                  onChange={controllerField.onChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={field.name} className="ml-2 text-sm text-gray-700">
                  {field.checkboxLabel || field.label}
                </label>
              </div>
            )}
          />
        );

      default:
        return (
          <Controller
            name={field.name}
            control={control}
            rules={validationRules}
            render={({ field: controllerField }) => (
              <input
                type={field.type || 'text'}
                id={field.name}
                placeholder={field.placeholder}
                {...controllerField}
                className={`${baseInputStyles} ${errorStyles}`}
              />
            )}
          />
        );
    }
  };

  return (
  <div className={(field && field.width === 'full') ? 'col-span-2' : 'col-span-1'}>
    {field?.type !== 'checkbox' && (
      <label
        htmlFor={field?.name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {field?.label}
        {field?.required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )}

    {renderField()}

    {error && (
      <p className="text-red-500 text-xs mt-1">{error.message}</p>
    )}
  </div>
);

}
