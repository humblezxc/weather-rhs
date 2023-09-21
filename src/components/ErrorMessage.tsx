interface ErrorMessageProps {
    error: string
}
export default function ErrorMessage({error}: ErrorMessageProps) {
    return(
        <p className="text-center pt-2">{error}</p>
    )
}
