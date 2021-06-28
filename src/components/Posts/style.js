import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	mainContainer: {
		display: 'flex',
		overflowY: 'auto',
		height: 'calc(100vh - 10rem)',
		'&::-webkit-scrollbar': {
			width: '0.4em',
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
			webkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
			outline: '1px solid slategrey',
		},
	},
	smMargin: {
		margin: theme.spacing(1),
	},
	actionDiv: {
		textAlign: 'center',
	},
}));