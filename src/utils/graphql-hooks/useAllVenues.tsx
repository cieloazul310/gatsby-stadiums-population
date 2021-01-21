//import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { UseAllVenuesQuery } from '../../../graphql-types';

export function useAllVenues() {
  const data = useStaticQuery<UseAllVenuesQuery>(graphql`
    query UseAllVenues {
      allVenues(filter: { clubs: { elemMatch: { category: { regex: "/(J1)|(J2)|(J3)/" } } } }) {
        edges {
          node {
            id
            coordinates
            name
            slug
            type
            population {
              val_1
              val_10
              val_3
              val_5
            }
            clubs {
              area
              category
              id
              hometown
              name
              short_name
              slug
            }
          }
        }
      }
    }
  `);
  return data.allVenues.edges;
}
