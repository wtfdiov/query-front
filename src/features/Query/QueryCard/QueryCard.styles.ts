import { QueryStatus } from 'interfaces/QueryData';
import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 24px 12px;
    background-color: white;
    color: black;
    width: 100%;
    margin-top: 12px;
    border-radius: 4px;
`;


export const Id = styled.div`
    padding: 4px;
    position: absolute;
    border-radius: 4px;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #f6f6f6;
    font-size: 8px;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`;

type StatusProp = {
    status: QueryStatus
}

export const Status = styled.div<StatusProp>`
    padding: 4px;
    position: absolute;
    border-radius: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: ${({ status }) => getStatusColor(status)};
`;

function getStatusColor(status: QueryStatus) {
    switch (status) {
        case QueryStatus.New:
            return '#82C3EC';
        case QueryStatus.Active:
            return '#FB2576';
        case QueryStatus.Done:
            return '#439A97';
        default:
            return '#f6f6f6'
    }
}