## LaunchDarkly Contexts Demo

Use this repository to deploy a new custom contexts demo. Consists of a React Web Frontend and Netlify Edge Function for gathering geo location. Deploy to Netlify in order for demo to work properly.

### Prerequsites

1. A LaunchDarkly project, if you don't have one set up, use the Terraform config file to build a new project and retrieve the `Client Side ID`
2. A Netlify account, make sure you save your `Client Side ID` in an environment variable named: `VITE_CLIENT_ID`

### To Set Up

1. Clone the repository and run `npm i` if you want to test locally first.
2. Build the LaunchDarkly project with Terraform file or use existing one (retrieve client side key)
3. Connect repository to Netlify, add client side key as env variable, set the base directory to `contexts-demo`, and deploy!
4. Optional: Repository includes Code References Action file, create new secret using Access Token named LD_ACCESS_TOKEN

### Experimentation (optional)

There is the ability to run an experiment with this demo. There is a click event called `sdkClickthrough` that gets sent to LaunchDarkly when users select the SDK Docs links. If you would like to showcase experimentation you will need to do the following:

1. Create a custom conversion metric with the event name of `sdkClickthrough`
2. Update one of the context kinds to be used for experimentation, I used `device` with `guest` as the randomization unit
3. Set up the experiment using the flag with the key `browserType`

#### IMPORTANT NOTE!

If you set up an experiment, you will not be able to run a `terraform destroy` to clean up this project. Flags connected to an experiment cannot be deleted, only archived. **The destory will fail!**
