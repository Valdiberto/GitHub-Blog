import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  transition: 0ms.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes['title-title-m']};
      color: ${({ theme }) => theme.colors['base-title']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span {
      max-width: max-content;
      font-size: ${({ theme }) => theme.textSizes['text-text-s']};
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
