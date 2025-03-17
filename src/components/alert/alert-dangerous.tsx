export default function AlertDangerous({message}: {message: string}) {
    return (
        <div className="text-red-600 text-lg alert alert-dangerous">{message}</div>
    )
}