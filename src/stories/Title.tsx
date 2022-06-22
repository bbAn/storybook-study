import React from "react";

//텍스트 Props로 받아와서 그려주는 컴포넌트 
export interface TitleProps {
    text?: string;
}

function Title ({ text }: TitleProps) {
    return <div>{text}</div>;
}

export default Title;