import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ComponentIndex from '../components/ComponentIndex';
import Layout from '../components/site-structure/Layout';

const APIDocumenation = () => (
  <StaticQuery
    query={graphql`
      {
        allDirectory(filter: {relativePath: {regex: "/^components\\//"}, relativeDirectory: {eq: "components"}}) {
          edges {
            node {
              name
              relativePath
              relativeDirectory
            }
          }
        }
        reactMdx: allMdx(filter: {fileAbsolutePath: {regex: "/react/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
        angularMdx: allMdx(filter: {fileAbsolutePath: {regex: "/angular/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
        htmlMdx: allMdx(filter: {fileAbsolutePath: {regex: "/vanilla/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { edges: components } = data.allDirectory;
      return (
        <Layout menuContext="apidocumentation">
          <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle">API Documentation</h1>
          {components.map((component, index) => (
            <ComponentIndex
              key={index}
              id={component.node.name}
              name={component.node.name}
              reactLink={data.reactMdx.edges.filter(edge => edge.node.frontmatter.title.toLowerCase() === component.node.name).length === 1 ? component.node.name : null}
              angularLink={data.angularMdx.edges.filter(edge => edge.node.frontmatter.title.toLowerCase() === component.node.name).length === 1 ? component.node.name : null}
              htmlLink={data.htmlMdx.edges.filter(edge => edge.node.frontmatter.title.toLowerCase() === component.node.name).length === 1 ? component.node.name : null}
            />
          ))}
        </Layout>
      );
    }}
  />
);

export default APIDocumenation;
