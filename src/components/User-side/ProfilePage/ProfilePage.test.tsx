import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter} from "react-router-dom";
import { ProfilePage } from './ProfilePage';

describe("ProfilePage", () => {
    it("Should render a Reporting A Sighting button that matches snapshot", () => {
        const component = renderer.create(
            <BrowserRouter>
            <ProfilePage/>
            </BrowserRouter>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });
});