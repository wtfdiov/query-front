import { ButtonContainer } from './Button.styles';

export type ButtonProps = {
    children?: React.ReactNode
    variant?: 'primary' | 'secondary',
    isBlock?: boolean,
}

export default function Button({ children, variant = 'primary', isBlock = false, onClick = () => {}}: ButtonProps & React.HTMLProps<HTMLButtonElement>) {
    return <ButtonContainer variant={variant} isBlock={isBlock} onClick={onClick}>{children}</ButtonContainer>
}