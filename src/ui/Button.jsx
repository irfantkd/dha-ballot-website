import React from 'react';

function Button({
  children,
  text,
  disabled = false,
  to,
  href,
  type = 'primary',
  size = 'medium',
  variant = 'solid',
  onClick,
  className = '',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props
}) {
  // Base styles that apply to all buttons
  const baseStyles =
    'inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  // Size variations
  const sizeStyles = {
    small: 'px-3 py-1.5 text-xs rounded-md',
    medium: 'px-4 py-2 text-sm rounded-lg md:px-6 md:py-3',
    large: 'px-6 py-3 text-base rounded-lg md:px-8 md:py-4',
    xl: 'px-8 py-4 text-lg rounded-xl md:px-10 md:py-5',
  };

  // Color and variant styles
  const variantStyles = {
    // Solid variants
    primary:
      'bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300',
    secondary:
      'bg-gray-600 text-white hover:bg-gray-700 focus:bg-gray-700 focus:ring-gray-500',
    success:
      'bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 focus:ring-green-400',
    danger:
      'bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 focus:ring-red-400',
    warning:
      'bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600 focus:ring-orange-400',
    info: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:ring-blue-400',

    // Outline variants
    'outline-primary':
      'border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-stone-800 focus:bg-yellow-400 focus:text-stone-800 focus:ring-yellow-300',
    'outline-secondary':
      'border-2 border-gray-300 text-gray-700 hover:bg-gray-300 hover:text-gray-800 focus:bg-gray-300 focus:text-gray-800 focus:ring-gray-200',
    'outline-success':
      'border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white focus:ring-green-300',
    'outline-danger':
      'border-2 border-red-500 text-red-700 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:ring-red-300',

    // Ghost variants
    'ghost-primary':
      'text-yellow-600 hover:bg-yellow-50 focus:bg-yellow-50 focus:ring-yellow-200',
    'ghost-secondary':
      'text-gray-600 hover:bg-gray-50 focus:bg-gray-50 focus:ring-gray-200',

    // Link variant
    link: 'text-blue-600 hover:text-blue-800 underline hover:no-underline focus:ring-blue-200',
  };

  // Combine all styles
  const buttonClasses = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${variantStyles[type] || variantStyles.primary}
    ${fullWidth ? 'w-full' : ''}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Button content with optional icon and loading state
  const buttonContent = (
    <>
      {loading && (
        <svg
          className="-ml-1 mr-2 h-4 w-4 animate-spin"
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

      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}

      {children || text}

      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  // Render as Link component for internal navigation (you'll need to import Link from react-router-dom)
  if (to) {
    // For this demo, we'll render as anchor tag
    // In your app, replace this with: <Link to={to} className={buttonClasses} {...props}>{buttonContent}</Link>
    return (
      <a href={to} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Render as anchor tag for external links
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Render as button element
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

// Example usage component
export const ButtonExamples = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="min-h-screen space-y-6 bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold">Reusable Button Examples</h1>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={handleClick}>Primary Button</Button>
          <Button type="secondary" onClick={handleClick}>
            Secondary
          </Button>
          <Button type="success" onClick={handleClick}>
            Success
          </Button>
          <Button type="danger" onClick={handleClick}>
            Danger
          </Button>
        </div>
      </div>

      {/* Size Variations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Size Variations</h2>
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
          <Button size="xl" onClick={handleClick}>
            Extra Large
          </Button>
        </div>
      </div>

      {/* Outline Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Outline Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button type="outline-primary" onClick={handleClick}>
            Outline Primary
          </Button>
          <Button type="outline-secondary" onClick={handleClick}>
            Outline Secondary
          </Button>
          <Button type="outline-success" onClick={handleClick}>
            Outline Success
          </Button>
          <Button type="outline-danger" onClick={handleClick}>
            Outline Danger
          </Button>
        </div>
      </div>

      {/* Ghost Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Ghost Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button type="ghost-primary" onClick={handleClick}>
            Ghost Primary
          </Button>
          <Button type="ghost-secondary" onClick={handleClick}>
            Ghost Secondary
          </Button>
        </div>
      </div>

      {/* Link Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Link Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button to="/home">Internal Link</Button>
          <Button href="https://google.com">External Link</Button>
          <Button type="link" onClick={handleClick}>
            Link Style
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button loading onClick={handleClick}>
            Loading Button
          </Button>
          <Button disabled onClick={handleClick}>
            Disabled Button
          </Button>
        </div>
      </div>

      {/* Custom Classes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Styling</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            className="transform shadow-lg hover:scale-105"
            onClick={handleClick}
          >
            Custom Shadow
          </Button>
          <Button fullWidth type="success" onClick={handleClick}>
            Full Width Button
          </Button>
        </div>
      </div>

      {/* With Text Prop */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Using Text Prop</h2>
        <div className="flex flex-wrap gap-4">
          <Button text="Text via prop" onClick={handleClick} />
          <Button
            text="Custom Class"
            className="rounded-full"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
