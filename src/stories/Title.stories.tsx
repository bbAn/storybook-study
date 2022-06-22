import React from "react";

import { Meta, Story } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
    title: "Components/Title",
    component: Title,
} as Meta; 
/* 
Meta 타입으로 컴포넌트의 정보를 작성하고 export default 해주면
스토리북에서 해당 정보를 파싱하여 컴포넌트를 생성 
*/

const Template: Story<TitleProps> = (args) => <Title {...args} />
/* 해당 컴포넌트의 템플릿을 셋팅하는 부분 */

export const Basic = Template.bind({});
Basic.args = { text: "Title!" }; //props 값 지정 해준 경우