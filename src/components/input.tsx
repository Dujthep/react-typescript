import { FocusEvent } from 'react';

interface MessageProp {
    blur(message: string): void
}

export const Input: React.FC<MessageProp> = (props) => {

    const onBlur = (event: FocusEvent<HTMLInputElement>) => {
        props.blur(event.target.value)
    }

    return (
        <input type="text" onBlur={onBlur} />
    )
}