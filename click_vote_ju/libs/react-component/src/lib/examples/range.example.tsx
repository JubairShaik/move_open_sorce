import { ClickVoteProvider } from '../click.vote.provider';
import { ClickVoteComponent } from '../click.vote.component';
import { Args } from './like.example.stories';
import { FC } from 'react';
import {RangeStyle} from "../types/rate.style";

export const RangeExample: FC<Args> = (props) => {
  const { apiUrl, publicKey, voteId, voteTo, userId } = props;
  return (
    <div style={{ width: 200 }}>
      <ClickVoteProvider value={{ apiUrl, publicKey, userId }}>
        <ClickVoteComponent id={voteId} voteTo={voteTo}>
          {(props) => <RangeStyle {...props} />}
        </ClickVoteComponent>
      </ClickVoteProvider>
    </div>
  );
};
