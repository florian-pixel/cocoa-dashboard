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
export declare type PLANTATIONUpdateFormInputValues = {
    lib?: string;
    img?: string;
    author?: string;
};
export declare type PLANTATIONUpdateFormValidationValues = {
    lib?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PLANTATIONUpdateFormOverridesProps = {
    PLANTATIONUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lib?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PLANTATIONUpdateFormProps = React.PropsWithChildren<{
    overrides?: PLANTATIONUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pLANTATION?: any;
    onSubmit?: (fields: PLANTATIONUpdateFormInputValues) => PLANTATIONUpdateFormInputValues;
    onSuccess?: (fields: PLANTATIONUpdateFormInputValues) => void;
    onError?: (fields: PLANTATIONUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PLANTATIONUpdateFormInputValues) => PLANTATIONUpdateFormInputValues;
    onValidate?: PLANTATIONUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PLANTATIONUpdateForm(props: PLANTATIONUpdateFormProps): React.ReactElement;
