

export function Card({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="p-8 bg-white w-full max-w-4xl rounded-lg shadow-sm">
                {children}
            </div>
        </>
    )
}