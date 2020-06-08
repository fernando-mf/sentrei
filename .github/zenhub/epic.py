import argparse
import requests
import json

zh_api_endpoint = "https://api.zenhub.com"
target_repo_id = 249660786

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="my math script")

    parser.add_argument("-t", "--token", help="Zenhub API Token", type=str)
    parser.add_argument("-i", "--issue", help="Issue", type=int)

    args = parser.parse_args()

    zenhub_headers = {
        "X-Authentication-Token": "%s" % args.token,
        "Content-Type": "application/json",
    }
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
