import EmailJSTest from '@/components/EmailJSTest';

export default function EmailJSTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">EmailJS Test Page</h1>
          <p className="mt-2 text-lg text-gray-600">
            Use this page to test EmailJS functionality in isolation
          </p>
        </div>
        
        <div className="mt-10">
          <EmailJSTest />
        </div>
        
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            Note: Make sure to check the browser console for any errors or debugging information.
          </p>
          <p className="mt-2">
            <a href="/" className="text-blue-600 hover:underline">
              Return to home page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 