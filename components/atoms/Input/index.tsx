import * as React from 'react';
import {ContainerInput} from "./styles";
import {Field, FieldAttributes,} from "formik";
import {Grid, TextField, TextFieldProps} from "@material-ui/core";

interface Props {
    id: string,
    name: string,
    value?: string | number,
    label?: string
}

export const Input: React.FC<FieldAttributes<Props> & TextFieldProps> = ({
                                                                             size = "medium",
                                                                             as,
                                                                             className,
                                                                             name,
                                                                             label,
                                                                             id,
                                                                             ...rest
                                                                         }) => {
    return (
        <ContainerInput className={className}>
            <Grid container spacing={1} alignItems="flex-end">

                <Grid item xs={12}>
                    <Field id={id} as={TextField} size={size} fullWidth name={name}
                           label={label || name} {...rest} />
                </Grid>
            </Grid>
        </ContainerInput>
    )
}

