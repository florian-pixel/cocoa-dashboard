/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PLANTATIONCreateFormInputValues = {
    lib?: string;
    img?: string;
    author?: string;
};
export declare type PLANTATIONCreateFormValidationValues = {
    lib?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PLANTATIONCreateFormOverridesProps = {
    PLANTATIONCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lib?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PLANTATIONCreateFormProps = React.PropsWithChildren<{
    overrides?: PLANTATIONCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PLANTATIONCreateFormInputValues) => PLANTATIONCreateFormInputValues;
    onSuccess?: (fields: PLANTATIONCreateFormInputValues) => void;
    onError?: (fields: PLANTATIONCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PLANTATIONCreateFormInputValues) => PLANTATIONCreateFormInputValues;
    onValidate?: PLANTATIONCreateFormValidationValues;
} & React.CSSProperties>;
export default function PLANTATIONCreateForm(props: PLANTATIONCreateFormProps): React.ReactElement;
