import argparse
import requests
import json
import os

zh_api_endpoint = "https://api.zenhub.com"
target_repo_id = 249660786
target_workspace_id = "5e8d05c456fc0ab0c9d6c9bb"
pipeline_inbox_id = "5e8d05c456fc0a1c25d6c9b7"
pipeline_doing_id = "5e8d05c456fc0acd39d6c9b8"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="my math script")

    parser.add_argument("-a", "--action", help="Action", type=str, required=True)
    parser.add_argument("-d", "--day", help="Day", type=int)
    parser.add_argument("-i", "--issue", help="Issue", type=int, required=True)
    parser.add_argument("-p", "--position", help="Position", type=int, required=True)

    args = parser.parse_args()

    zenhub_headers = {
        "X-Authentication-Token": "%s" % os.environ["ZENHUB_API_TOKEN"],
        "Content-Type": "application/json",
    }

    if args.action != "week":
        target_zh_issues_url = "%s/p1/repositories/%d/issues" % (
            zh_api_endpoint,
            target_repo_id,
        )
        params = json.dumps(
            {"issues": [{"repo_id": target_repo_id, "issue_number": args.issue}]}
        )
        requests.post(
            target_zh_issues_url + "/%s/convert_to_epic" % args.issue,
            headers=zenhub_headers,
            data=params,
        )

    if args.action == "day":
        target_pipeline_id = pipeline_inbox_id

    if args.action == "session" and args.day is not None:
        target_pipeline_id = pipeline_doing_id
        target_zh_epics_url = "%s/p1/repositories/%d/epics" % (
            zh_api_endpoint,
            target_repo_id,
        )
        params = json.dumps(
            {"add_issues": [{"repo_id": target_repo_id, "issue_number": args.issue}]}
        )
        requests.post(
            target_zh_epics_url + "/%s/update_issues" % args.day,
            headers=zenhub_headers,
            data=params,
        )

    target_zh_pipelines_url = "%s/p2/workspaces/%s/repositories/%d/issues" % (
        zh_api_endpoint,
        target_workspace_id,
        target_repo_id,
    )
    params = json.dumps({"pipeline_id": target_pipeline_id, "position": args.position})
    requests.post(
        target_zh_pipelines_url + "/%s/moves" % args.issue,
        headers=zenhub_headers,
        data=params,
    )
