import React, { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {StyledSelect} from './styled';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

export function SelectDevice(props) {
    const classes = useStyles()
    return(
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="selectLabel">Selecione um Dia</InputLabel>
                <StyledSelect labelId="selectLabel" name="day" value={props.value} onChange={props.onChange}>
                    <MenuItem></MenuItem>
                    <MenuItem value="Segunda">Segunda</MenuItem>
                    <MenuItem value="Terça">Terça</MenuItem>
                    <MenuItem value="Quarta">Quarta</MenuItem>
                    <MenuItem value="Quinta">Quinta</MenuItem>
                    <MenuItem value="Sexta">Sexta</MenuItem>
                    <MenuItem value="Sábado">Sábado</MenuItem>
                    <MenuItem value="Domingo">Domingo</MenuItem>
                </StyledSelect>
            </FormControl>
        </Fragment>
    )
}

export default SelectDevice;