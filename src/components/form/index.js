import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {TextareaAutosize} from "@material-ui/core";
import "./style.css"
import {actions} from "../../store/snipet.duck";

export default function FormDialog() {

    const dispatch = useDispatch();

    const open = useSelector(state => state.snipet.dialogOpen);

    const author = useSelector(state => state.snipet.author);
    const authorImage = useSelector(state => state.snipet.authorImage);
    const social = useSelector(state => state.snipet.social);
    const code = useSelector(state => state.snipet.code);
    const codeType = useSelector(state => state.snipet.codeType);

    const [authorLocal, setAuthor] = React.useState(author);
    const [authorImageLocal, setAuthorImage] = React.useState(authorImage);
    const [socialLocal, setSocial] = React.useState(social);
    const [codeTypeLocal, setCodeType] = React.useState(codeType);
    const [codeLocal, setCode] = React.useState(code);

    const handleSave = () => {
        dispatch(actions.setSnipet(codeLocal, authorLocal, authorImageLocal, codeTypeLocal, socialLocal));
        dispatch(actions.toogleDialog(false));
    };

    const handleClose = () => {
        dispatch(actions.toogleDialog(false));
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Snippet</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill the form bellow to change the code snippet.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="author"
                        label="Author"
                        type="text"
                        fullWidth
                        value={authorLocal}
                        onChange={e => {
                            setAuthor(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="authorImage"
                        label="Author Image"
                        type="text"
                        fullWidth
                        value={authorImageLocal}
                        onChange={e => {
                            setAuthorImage(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="social"
                        label="Author Social"
                        type="text"
                        fullWidth
                        value={socialLocal}
                        onChange={e => {
                            setSocial(e.target.value)
                        }}
                    /><TextField
                    margin="dense"
                    id="social"
                    label="Code Type"
                    type="text"
                    fullWidth
                    value={codeTypeLocal}
                    onChange={e => {
                        setCodeType(e.target.value)
                    }}
                />
                    <textarea onChange={e => {
                        setCode(e.target.value)
                    }} value={codeLocal} className="code-input"></textarea>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Change Snippet
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
