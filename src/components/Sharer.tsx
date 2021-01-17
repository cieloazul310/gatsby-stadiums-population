import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '../components/fa-buttons/TwitterIcon';
import FacebookIcon from '../components/fa-buttons/FacebookIcon';
import GithubIcon from '../components/fa-buttons/GithubIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

interface Props {
  title: string;
  url: string;
}

function Sharer({ title, url }: Props) {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <IconButton
        aria-label="Share on Twitter"
        href={`https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="View on GitHub"
        href="https://github.com/cieloazul310/gatsby-stadiums-population"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Sharer;
