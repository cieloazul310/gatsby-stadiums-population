//import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { UseAllVenuesQuery } from '../../../graphql-types';

export function useAllVenues() {
  const data = useStaticQuery<UseAllVenuesQuery>(graphql`
    query UseAllVenues {
      J1: allVenues(filter: { clubs: { elemMatch: { category: { eq: "J1" } } } }) {
        edges {
          node {
            ...VenuesItem
          }
        }
      }
      J2: allVenues(filter: { clubs: { elemMatch: { category: { eq: "J2" } } } }) {
        edges {
          node {
            ...VenuesItem
          }
        }
      }
      J3: allVenues(filter: { clubs: { elemMatch: { category: { eq: "J3" } } } }) {
        edges {
          node {
            ...VenuesItem
          }
        }
      }
      JFL: allVenues(filter: { clubs: { elemMatch: { category: { eq: "JFL" } } } }) {
        edges {
          node {
            ...VenuesItem
          }
        }
      }
    }

    fragment VenuesItem on venues {
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
  `);
  return data;
}
