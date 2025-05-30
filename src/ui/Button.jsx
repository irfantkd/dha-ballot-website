import React from 'react';

function Button({
  children,
  text,
  disabled = false,
  to,
  href,
  type = 'primary',
  size = 'medium',
  onClick,
  className = '',
  loading = false,
  fullWidth = false,
  ...props
}) {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

  // Size variations
  const sizeStyles = {
    small: 'px-4 py-2 text-sm rounded-md',
    medium: 'px-6 py-3 text-base rounded-lg',
    large: 'px-8 py-4 text-lg rounded-lg',
  };

  // Type variations
  const typeStyles = {
    primary:
      'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-[#ea5547]',
    secondary:
      'bg-gray-600 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-500',
    outline:
      'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-2 focus:ring-[#ea5547]',
    ghost: 'text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-[#ea5547]',
  };

  // Combine styles
  const buttonClasses = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${typeStyles[type]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Button content
  const buttonContent = (
    <>
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children || text}
    </>
  );

  // Render based on props
  if (to) {
    return (
      <a href={to} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      {...props}
    >
      {buttonContent}
    </button>
  );
}

export default Button;

// Example usage
export const ButtonExamples = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Button Component Examples
      </h1>

      {/* Button Types */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Button Types
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={handleClick}>Primary</Button>
          <Button type="secondary" onClick={handleClick}>
            Secondary
          </Button>
          <Button type="outline" onClick={handleClick}>
            Outline
          </Button>
          <Button type="ghost" onClick={handleClick}>
            Ghost
          </Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Button Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="small" onClick={handleClick}>
            Small
          </Button>
          <Button size="medium" onClick={handleClick}>
            Medium
          </Button>
          <Button size="large" onClick={handleClick}>
            Large
          </Button>
        </div>
      </div>

      {/* Button States */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Button States
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button loading onClick={handleClick}>
            Loading
          </Button>
          <Button disabled onClick={handleClick}>
            Disabled
          </Button>
          <Button fullWidth onClick={handleClick}>
            Full Width
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Links</h2>
        <div className="flex flex-wrap gap-4">
          <Button to="/home">Internal Link</Button>
          <Button href="https://example.com" target="_blank">
            External Link
          </Button>
        </div>
      </div>

      {/* Custom Example */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Custom Styling
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button
            className="transform shadow-lg hover:scale-105"
            onClick={handleClick}
          >
            Custom Button
          </Button>
        </div>
      </div>
    </div>
  );
};
