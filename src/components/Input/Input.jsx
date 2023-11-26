export default function Input({ classes, labelId, ...attributes }) {
    return (
        <>
            <div>
                <label htmlFor={labelId} className="sr-only">
                    Password
                </label>
                <input
                    {...attributes}
                    id={labelId}
                    required
                    class={`login-input ${classes}`}
                />
            </div>
        </>
    );
}
