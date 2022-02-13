import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactChild } from 'react';
import { Typography } from '@components/ui';

interface IProps {
  align?: string;
  justify?: string;
  flex?: number | string;
  textAlign?: string;
  gutter?: number;
}

const defaultProps = {
  align: 'normal',
  justify: 'normal',
  flex: 'none',
  textAlign: 'unset',
  gutter: 0,
};

export const StyledFormItem = styled.div<IProps>`
  display: flex;
  flex-direction: 'row';
  align-items: ${(props) => props.align};
  text-align: ${(props) => props.textAlign};
  justify-content: ${(props) => props.justify};
  flex: ${(props) => (props.flex ? props.flex : 'none')};
  gap: ${(props) => props.gutter}px;
  margin-bottom: 16px;
`;

StyledFormItem.defaultProps = defaultProps;

interface FromItemProps extends React.ComponentProps<typeof StyledFormItem> {
  className?: string;
  children?: ReactChild | ReactChild[];
  label?: string;
  labelStyle?: SerializedStyles;
}

export const FormItem = ({
  className,
  label,
  labelStyle,
  children,
  ...props
}: FromItemProps) => (
  <div>
    {label && (
      <Typography.Text
        type="s2"
        color="slategray80"
        css={labelStyle}
        asterisk
        gutter={{ bottom: 8 }}
      >
        {label}
      </Typography.Text>
    )}
    <StyledFormItem className={className} {...props}>
      {children}
    </StyledFormItem>
  </div>
);
