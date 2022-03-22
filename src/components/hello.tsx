export const Hello = ({ message }: MessageProp) => {
    return (
        <div>{message}</div>
    )
};

type MessageProp = {
    message: string;
};