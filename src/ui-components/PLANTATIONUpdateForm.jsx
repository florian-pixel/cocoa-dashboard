/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getPLANTATION } from "../graphql/queries";
import { updatePLANTATION } from "../graphql/mutations";
export default function PLANTATIONUpdateForm(props) {
  const {
    id: idProp,
    pLANTATION: pLANTATIONModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    lib: "",
    img: "",
  };
  const [lib, setLib] = React.useState(initialValues.lib);
  const [img, setImg] = React.useState(initialValues.img);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pLANTATIONRecord
      ? { ...initialValues, ...pLANTATIONRecord }
      : initialValues;
    setLib(cleanValues.lib);
    setImg(cleanValues.img);
    setErrors({});
  };
  const [pLANTATIONRecord, setPLANTATIONRecord] =
    React.useState(pLANTATIONModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getPLANTATION.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPLANTATION
        : pLANTATIONModelProp;
      setPLANTATIONRecord(record);
    };
    queryData();
  }, [idProp, pLANTATIONModelProp]);
  React.useEffect(resetStateValues, [pLANTATIONRecord]);
  const validations = {
    lib: [],
    img: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          lib: lib ?? null,
          img: img ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updatePLANTATION.replaceAll("__typename", ""),
            variables: {
              input: {
                id: pLANTATIONRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PLANTATIONUpdateForm")}
      {...rest}
    >
      <TextField
        label="Lib"
        isRequired={false}
        isReadOnly={false}
        value={lib}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lib: value,
              img,
            };
            const result = onChange(modelFields);
            value = result?.lib ?? value;
          }
          if (errors.lib?.hasError) {
            runValidationTasks("lib", value);
          }
          setLib(value);
        }}
        onBlur={() => runValidationTasks("lib", lib)}
        errorMessage={errors.lib?.errorMessage}
        hasError={errors.lib?.hasError}
        {...getOverrideProps(overrides, "lib")}
      ></TextField>
      <TextField
        label="Img"
        isRequired={false}
        isReadOnly={false}
        value={img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lib,
              img: value,
            };
            const result = onChange(modelFields);
            value = result?.img ?? value;
          }
          if (errors.img?.hasError) {
            runValidationTasks("img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("img", img)}
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        {...getOverrideProps(overrides, "img")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pLANTATIONModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pLANTATIONModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}