export default function ProductDetailsLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
        return(
            <>
                {children}
                <h2>Feature Products</h2>
            </>
        )
    }