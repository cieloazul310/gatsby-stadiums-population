import * as React from 'react';
import { Link } from 'gatsby';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import data from '../data/stadiums.json';

console.log(data);

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <Link to="/page-2/">Go to page 2</Link>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>500m</TableCell>
                <TableCell>1500m</TableCell>
                <TableCell>3000m</TableCell>
                <TableCell>5000m</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell>{feature.properties.name}</TableCell>
                  <TableCell>{feature.properties.radius500}</TableCell>
                  <TableCell>{feature.properties.radius1500}</TableCell>
                  <TableCell>{feature.properties.radius3000}</TableCell>
                  <TableCell>{feature.properties.radius5000}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
