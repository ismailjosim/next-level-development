"use client";
interface Error {
    error: {
        message: string
    },
    reset: () => void
}
const ErrorPage = ({ error, reset }: Error) => {

    return (
        <div className="flex flex-col justify-center text-2xl gap-5  items-center text-center h-screen">
            <h3>something went wrong!</h3>
            <p>{error.message}</p>
            <button type="button" className="bg-amber-500 cursor-pointer p-2 rounded-md" onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default ErrorPage;
