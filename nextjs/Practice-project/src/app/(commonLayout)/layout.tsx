import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar />
            {children}
            <h3>Footer section goes here</h3>
        </>
    );
};

export default CommonLayout;
