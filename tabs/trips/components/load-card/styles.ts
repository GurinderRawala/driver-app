import { makeStyles } from "@rneui/themed";

export const useTripsCardStyles = makeStyles(
    () => (
        {
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