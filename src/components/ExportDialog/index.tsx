import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography
} from "@material-ui/core";
import * as queryString from "querystring";
import * as React from "react";
import * as CopyToClipboard from "react-copy-to-clipboard";
import { IUserTheme } from "../../RootContainer";
import { NoParamsAny } from "../../utils/types";
import { saveTheme } from "./saveTheme";

export interface IExportDialogProps {
  isOpen: boolean;
  theme: IUserTheme;
  closeDialog: NoParamsAny;
}

export const ExportDialog: React.SFC<IExportDialogProps> = props => {
  const urlToShare = `${window.location.origin}/?${queryString.stringify(
    {theme: JSON.stringify(props.theme)}
  )}`;
  console.log(window.location);
  return (
    <Dialog
      open={props.isOpen}
      aria-labelledby="export-dialog__title"
      onClose={props.closeDialog}
    >
      <DialogTitle id="export-dialog__title">
        Exportar configurações
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Você pode clicar no botão "Salvar" para salvar o arquivo com o tema
            ou copiar o link abaixo para compartilhar estas configurações ;)
          </Typography>
        </DialogContentText>
        <div style={{ display: "flex", margin: '2rem 0' }}>
          <TextField
            defaultValue={urlToShare}
            label="Link para compartilhamento"
            inputProps={{
              readOnly: true
            }}
            style={{flex: 1}}
          />
          <CopyToClipboard text={urlToShare}>
            <Button>Copiar Link</Button>
          </CopyToClipboard>
        </div>
        <DialogActions>
          <Button color="primary" onClick={saveTheme(props.theme)}>
            Salvar
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

ExportDialog.displayName = "ExportDialog";

export default ExportDialog;
