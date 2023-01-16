import { makeStyles } from "@rneui/themed";
import { LayoutReducer } from "store/slices";

const MAIN_CONTAINER_PADDING = 28;

export const useTripsCardStyles = makeStyles(
    (_, props: LayoutReducer) => (
        {
            container: {
                width: props.width - MAIN_CONTAINER_PADDING
            },
            heading: {
                textAlign: "center"
            },
            body: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            },
            infoContainer:{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%"
            },
            infoTitle:{
                width: "30%",
                fontFamily: "Titillium",
                textAlign: "left"
            },
            info:{
                width: "70%",
                fontWeight: "600",
                textAlign: "left"
            },
        }
    )
)