import { Checkbox, FormControlLabel, InputBase, MenuItem, TextField } from '@material-ui/core';
import React from 'react';

const FormControl = ({
    children,
    // meta: {touched, error, warning}
}) => {
    return(
        <>
            {children}
            {/* {touched &&
            ((error && <span className={s.error}>{error}</span>) ||
            (warning && <span className={s.warning}>{warning}</span>))} */}
        </>
    )
}

// export const Input = (props) => {
//     return (<FormControl {...props}><input {...props.input} type={props.type} placeholder={props.placeholder} /></FormControl>)
// }

// add TODO
export const Input = (props) => {
    return (<FormControl {...props}><TextField {...props.input} type={props.type} id="outlined-basic" label="To Do" variant="outlined" size="small" fullWidth /></FormControl>)
}
export const EditInput = (props) => {
    return (<FormControl {...props}><TextField {...props.input}  type={props.type} autoFocus margin="dense" id="editToDo" label="To Do" variant="outlined" size="small" fullWidth /></FormControl>)
}
export const SearchInput = (props) => {
    return (<FormControl {...props}>
        <InputBase
            {...props.input}
            placeholder={"Search…"}
            classes={{
                root: props.classes.inputRoot,
                input: props.classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            />
        </FormControl>)
}

export const LoginInput = (props) => {
    return (<FormControl {...props}>
        <TextField
            {...props.input}
            type={props.type}
            variant="outlined"
            margin={props.margin}
            required={props.required}
            fullWidth
            label={props.label}
            autoComplete={props.email}
            autoFocus={props.autoFocus}
            error={props.meta.touched && props.meta.error ? true : false}
            helperText={props.meta.touched &&
                (props.meta.error && props.meta.error)}
          />
        </FormControl>)
}

export const LoginCheckbox = (props) => {
    return (<FormControl {...props}>
        <FormControlLabel
            control={<Checkbox {...props.input}  value="remember" color="primary" />}
            label={props.label}
          />
        </FormControl>)
}

export const LoginSelect = (props) => {
    return (<FormControl {...props}>
        <TextField
            {...props.input}
            id="outlined-select-country"
            select
            fullWidth
            type={props.type}
            required={props.required}
            label={props.label}
            variant="outlined"
            value={props.value}
            error={props.meta.touched && props.meta.error ? true : false}
            helperText={props.meta.touched &&
                (props.meta.error && props.meta.error)}
        >
            {props.countries.map((option, i) => (
                <MenuItem key={i} value={option.name}>
                {option.name}
            </MenuItem>
            ))}
        </TextField>
        </FormControl>)
}
