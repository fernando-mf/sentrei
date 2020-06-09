import argparse
import requests
import json
import os
from requests_toolbelt.utils import dump

zh_api_endpoint = "https://api.zenhub.com"
target_repo_id = 249660786
target_release_id = "5eb03b38b58bd77aeb78e70c"
target_workspace_id = "5e8d05c456fc0ab0c9d6c9bb"
pipeline_inbox_id = "5e8d05c456fc0a1c25d6c9b7"
pipeline_doing_id = "5e8d05c456fc0acd39d6c9b8"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="my math script")

    parser.add_argument("-a", "--action", help="Action", type=str, required=True)
    parser.add_argument("-d", "--day", help="Day", type=int)
    parser.add_argument("-i", "--issue", help="Issue", type=int)
    parser.add_argument("-p", "--position", help="Position", type=int)

    args = parser.parse_args()

    zenhub_headers = {
        "X-Authentication-Token": "%s" % os.environ["ZENHUB_API_TOKEN"],
        "Content-Type": "application/json",
    }

    if args.action == "day":
        target_pipeline_id = pipeline_inbox_id

    if (
        args.action == "session"
        and args.issue is not None
        and args.day is not None
        and args.position is not None
    ):
        target_pipeline_id = pipeline_doing_id
        target_zh_epics_url = "%s/p1/repositories/%d/epics" % (
            zh_api_endpoint,
            target_repo_id,
        )
        params = json.dumps(
            {"add_issues": [{"repo_id": target_repo_id, "issue_number": args.issue}]}
        )
        res = requests.post(
            target_zh_epics_url + "/%s/update_issues" % args.day,
            headers=zenhub_headers,
            data=params,
        )
        data = dump.dump_all(res)
        print(data.decode("utf-8"))

    if args.action != "week" and args.issue is not None and args.position is not None:
        target_zh_issues_url = "%s/p1/repositories/%d/issues" % (
            zh_api_endpoint,
            target_repo_id,
        )
        params = json.dumps(
            {"issues": [{"repo_id": target_repo_id, "issue_number": args.issue}]}
        )
        res = requests.post(
            target_zh_issues_url + "/%s/convert_to_epic" % args.issue,
            headers=zenhub_headers,
            data=params,
        )
        data = dump.dump_all(res)
        print(data.decode("utf-8"))

        target_zh_releases_url = "%s/p1/reports/release/%s" % (
            zh_api_endpoint,
            target_release_id,
        )
        params = json.dumps(
            {
                "add_issues": [{"repo_id": target_repo_id, "issue_number": args.issue}],
                "remove_issues": [],
            }
        )
        res = requests.patch(
            target_zh_releases_url + "/issues", headers=zenhub_headers, data=params,
        )
        data = dump.dump_all(res)
        print(data.decode("utf-8"))

        target_zh_pipelines_url = "%s/p2/workspaces/%s/repositories/%d/issues" % (
            zh_api_endpoint,
            target_workspace_id,
            target_repo_id,
        )
        params = json.dumps(
            {"pipeline_id": target_pipeline_id, "position": args.position}
        )
        res = requests.post(
            target_zh_pipelines_url + "/%s/moves" % args.issue,
            headers=zenhub_headers,
            data=params,
        )
        data = dump.dump_all(res)
        print(data.decode("utf-8"))
