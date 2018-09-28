import * as React from 'react';
import { NoParamsAny } from '../../../utils/types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

export interface IResetDialogProps {
  resetTheme: NoParamsAny;
  isOpen: boolean;
  closeModal: NoParamsAny;
}

export const ResetDialog: React.SFC<IResetDialogProps> = props => {
  const clickButton = () => {
    props.resetTheme();
    props.closeModal();
  };
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.closeModal}
      aria-labelledby="reset-dialog-title"
      aria-describedby="reset-dialog-description"
    >
      <DialogTitle id="reset-dialog-title">
        Certeza que quer deletar suas configurações?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="reset-dialog-description">
          Essa ação é irreversível!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={clickButton} color="secondary">
          Resetar configurações
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ResetDialog.displayName = 'ResetDialog';

export default ResetDialog;
