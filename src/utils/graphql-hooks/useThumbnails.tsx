import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { UseThumbnailsQuery } from '../../../graphql-types';

export function useThumbnails() {
  const data = useStaticQuery<UseThumbnailsQuery>(graphql`
    query UseThumbnails {
      allFile(filter: { relativeDirectory: { glob: "stadiums/*" } }) {
        group(field: relativeDirectory) {
          fieldValue
          venues: edges {
            node {
              childVenues {
                slug
                name
                clubs {
                  short_name
                  category
                }
                population {
                  val_1
                  val_3
                  val_5
                  val_10
                }
              }
            }
          }
          images: edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 360, layout: CONSTRAINED)
              }
              name
            }
          }
        }
      }
    }
  `);
  return React.useMemo(() => {
    const { group } = data.allFile;
    const allVenues = group
      .map(({ venues, images }) => {
        const names = images.map(({ node }) => node?.name);
        const population_0 = images[names.indexOf('population_0')].node.childImageSharp;
        const population_1 = images[names.indexOf('population_1')].node.childImageSharp;
        const { node } = venues[0];
        return {
          name: node.childVenues?.name,
          slug: node.childVenues?.slug,
          clubs: node.childVenues?.clubs?.map((club) => club?.short_name ?? null) ?? [],
          categories: node.childVenues?.clubs?.map((club) => club?.category ?? null) ?? [],
          population: node.childVenues?.population,
          population_0: population_0 ?? null,
          population_1: population_1 ?? null,
        };
      })
      .sort((a, b) => (b.population?.val_10 ?? 0) - (a.population?.val_10 ?? 0));
    return {
      J1: allVenues.filter(({ categories }) => categories.includes('J1')),
      J2: allVenues.filter(({ categories }) => categories.includes('J2')),
      J3: allVenues.filter(({ categories }) => categories.includes('J3')),
      JFL: allVenues.filter(({ categories }) => categories.includes('JFL')),
    };
  }, [data]);
}
