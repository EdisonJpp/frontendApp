import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default function UseStyles() {

    const style = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                fontSize: "35px",
                color: '#757575',
            },
        })
    );
    const styles = style();

    return [{ styles }];
} 