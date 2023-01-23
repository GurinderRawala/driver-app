import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily: "Titillium",
        color: theme.colors.black,
    },
    view: {
        backgroundColor: theme.colors.background,
        padding: 1
    },
    statusbar: {
        backgroundColor: theme.colors.black
    },
    spinnerIcon: {
        color: theme.colors.black
    },
    permilesImage: {
        height: 120,
        width: 250 
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}));