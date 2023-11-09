import React from "react";

type Props = {};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="bg-red-500 w-1/4 p-4 rounded-md">
            <h2 className="text-white font-bold text-lg mb-2">
              Oops, there is an error!
            </h2>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="bg-white text-red-500 font-bold py-2 px-4 rounded"
            >
              Try again?
            </button>
          </div>
        </div>
      );
    }

    // Return children components in case of no error

    // @ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
