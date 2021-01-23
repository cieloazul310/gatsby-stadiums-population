import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import { useAppState, useDispatch } from '../gatsby-theme-aoi-top-layout/utils/AppStateContext';
import { valToStr } from '../utils/valToStr';
import { useWindowSize } from '../utils/useWindowSize';
import { VenuesPopulation, VenuesItemFragment } from '../../graphql-types';

interface StylesProps {
  height: number | undefined;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      maxHeight: ({ height }) => height,
    },
    table: {
      minWidth: 720,
    },
    theadName: {
      zIndex: 3,
    },
    name: {
      maxWidth: '18em',
      zIndex: 1,
      background: theme.palette.background.paper,
      position: 'sticky',
      left: 0,
    },
    club: {
      wordBreak: 'keep-all',
      msWordBreak: 'keep-all',
    },
  })
);

type SortRadius = keyof VenuesPopulation;

interface Props {
  venues: { node: VenuesItemFragment }[];
  //enableMaxHeight?: boolean;
}

function StadiumsTable({ venues }: Props) {
  const size = useWindowSize();
  const classes = useStyles({ height: size.height - 64 });
  const { sortRadius, sortAsc } = useAppState();
  const dispatch = useDispatch();
  const rows = React.useMemo(() => {
    return venues.sort((a, b) => (sortAsc ? -1 : 1) * ((b.node.population?.[sortRadius] ?? 0) - (a.node.population?.[sortRadius] ?? 0)));
  }, [venues, sortRadius, sortAsc]);

  const _onSortLabelClick = (str: SortRadius) => () => {
    if (str === sortRadius) {
      dispatch({ type: 'TOGGLE_SORTASC' });
    } else {
      dispatch({ type: 'CHANGE_SORTRADIUS', sortRadius: str });
    }
  };
  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell className={classes.theadName}>名称</TableCell>
            <TableCell className={classes.club}>クラブ</TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_1'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_1')}>
                1km圏
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_3'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_3')}>
                3km圏
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_5'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_5')}>
                5km圏
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_10'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_10')}>
                10km圏
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ node }, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className={classes.name}>
                <AppLink to={`/${node.slug}`} color="inherit">
                  {node.name}
                </AppLink>
              </TableCell>
              <TableCell className={classes.club}>{node.clubs?.map((club) => club?.short_name).join(' ')}</TableCell>
              <TableCell align="right">{valToStr(node.population?.val_1)}</TableCell>
              <TableCell align="right">{valToStr(node.population?.val_3)}</TableCell>
              <TableCell align="right">{valToStr(node.population?.val_5)}</TableCell>
              <TableCell align="right">{valToStr(node.population?.val_10)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StadiumsTable;
