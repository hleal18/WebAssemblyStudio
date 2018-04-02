/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

import * as React from "react";

import appStore from "../../../src/stores/AppStore";
import dispatcher from "../../../src/dispatcher";
import {AppActionType, logLn, closeTabs, openFile, splitGroup} from "../../../src/actions/AppActions";
import {File, FileType} from "../../../src/model";
import {ViewType} from "../../../src/components/editor/View";

describe("AppActions component", () => {
  describe("logLn action", () => {
    beforeEach(() => {
      dispatcher.dispatch({type:AppActionType.INIT_STORE});
    });
    it("output initially is empty", () => {
      const output = appStore.getOutput().getModel();
      expect(output.buffer.toString()).toBe("");
    });
    it("output changes on logLn action", () => {
      logLn("test", "info");
      const output = appStore.getOutput().getModel();
      expect(output.buffer.toString()).toBe("[info]: test\n");
    });
    it("output notifies about change on logLn action", () => {
      let notified = false;
      const handler = () => notified = true;
      appStore.onOutputChanged.register(handler);
      logLn("test", "info");
      appStore.onOutputChanged.unregister(handler);
      expect(notified).toBeTruthy();
    });
  });

  describe("closeTabs action", () => {
    let exampleFiles : File[] = [
      new File("test1.c", FileType.C),
      new File("test2.cpp", FileType.Cpp),
      new File("test3.js", FileType.JavaScript)
    ];
    beforeEach(() => {
      dispatcher.dispatch({type: AppActionType.INIT_STORE});
    });
    it("should delete a view related to a file", () => {
      openFile(exampleFiles[0]);
      expect(appStore.getActiveTabGroup().views.length).toBe(1);
      closeTabs(exampleFiles[0]);
      expect(appStore.getActiveTabGroup().views.length).toBe(0);
    });
    it("should delete two views from two groups related to a file", () => {
      openFile(exampleFiles[0]);
      splitGroup();
      expect(appStore.getActiveTabGroup().views.length).toBe(1);
      expect(appStore.getTabGroups().length).toBe(2);
      closeTabs(exampleFiles[0]);
      expect(appStore.getActiveTabGroup().views.length).toBe(0);
      expect(appStore.getTabGroups().length).toBe(1);
    });
    it("should delete one view and place the correct activeTabGroup", () => {
      openFile(exampleFiles[0]);
      openFile(exampleFiles[1]);
      splitGroup();
      expect(appStore.getActiveTabGroup().views.length).toBe(1);
      expect(appStore.getTabGroups()[0].views).toBe(2);
      expect(appStore.getTabGroups().length).toBe(2);
    })
  })
});
