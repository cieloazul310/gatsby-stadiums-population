import * as React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import { valToStr } from '../utils/valToStr';
import { useWindowSize } from '../utils/useWindowSize';
import { useAllVenues } from '../utils/graphql-hooks';
import { VenuesPopulation } from '../../graphql-types';

interface StylesProps {
  height: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      maxHeight: ({ height }) => height,
    },
  })
);

type SortRadius = keyof VenuesPopulation;

function StadiumsTable() {
  const size = useWindowSize();
  const classes = useStyles({ height: size.height - 64 });
  const allVenues = useAllVenues();
  const [sortRadius, setSortRadius] = React.useState<SortRadius>('val_1');
  const [sortAsc, setSortAsc] = React.useState(false);
  const rows = React.useMemo(() => {
    return allVenues.sort((a, b) => (sortAsc ? -1 : 1) * ((b.node.population?.[sortRadius] ?? 0) - (a.node.population?.[sortRadius] ?? 0)));
  }, [allVenues, sortRadius, sortAsc]);

  const _onSortLabelClick = (str: SortRadius) => () => {
    if (str === sortRadius) {
      setSortAsc(!sortAsc);
    } else {
      setSortRadius(str);
      setSortAsc(false);
    }
  };
  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>名称</TableCell>
            <TableCell>クラブ</TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_1'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_1')}>
                1km
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_3'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_3')}>
                3km
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_5'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_5')}>
                5km
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" sortDirection={sortAsc ? 'asc' : 'desc'}>
              <TableSortLabel active={sortRadius === 'val_10'} direction={sortAsc ? 'asc' : 'desc'} onClick={_onSortLabelClick('val_10')}>
                10km
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ node }, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <AppLink to={`/${node.slug}`} color="inherit">
                  {node.name}
                </AppLink>
              </TableCell>
              <TableCell>{node.clubs?.map((club) => club?.short_name).join(' ')}</TableCell>
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
