import React from "react";
import styled, {css} from "styled-components";
import Link from "next/link";

import {Root, Container, Spacer, Logo, Links, StyledLink} from './styles';

export default () => (
  <Root>
    <Container>
      <Spacer>
        <Logo>
          Home
        </Logo>
        <Links>
          <Link href="/movies" passHref>
            <StyledLink>
              Movies
            </StyledLink>
          </Link>
        </Links>
      </Spacer>
    </Container>
  </Root>
)
