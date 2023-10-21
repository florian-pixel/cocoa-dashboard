/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ComposantItemPlantationProps } from "./ComposantItemPlantation";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComposantItemPlantationCollectionOverridesProps = {
    ComposantItemPlantationCollection?: PrimitiveOverrideProps<CollectionProps>;
    ComposantItemPlantation?: ComposantItemPlantationProps;
} & EscapeHatchProps;
export declare type ComposantItemPlantationCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ComposantItemPlantationProps;
} & {
    overrides?: ComposantItemPlantationCollectionOverridesProps | undefined | null;
}>;
export default function ComposantItemPlantationCollection(props: ComposantItemPlantationCollectionProps): React.ReactElement;
