import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    container: {
        marginTop: '20px',
        display: 'flex'
    }
}))

export default useStyles