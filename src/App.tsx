import {
    Theme,
    Container,
    Flex,
    Heading,
    Text,
    Badge,
    Card,
    Box,
} from "@radix-ui/themes";
import { TextSummarizer } from "./components/TextSummarizer";
import {
    MagicWandIcon,
    LightningBoltIcon,
    LockClosedIcon,
} from "@radix-ui/react-icons";

import "@radix-ui/themes/styles.css";

function App() {
    return (
        <Theme
            accentColor="mint"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="full"
        >
            <Box
                style={{
                    minHeight: "100vh",
                    background:
                        "linear-gradient(135deg, var(--mint-2) 0%, var(--violet-2) 30%, var(--gray-1) 100%)",
                }}
            >
                <Container size="4" style={{ padding: "2rem 1rem" }}>
                    <Flex direction="column" gap="6">
                        {/* Header Section */}
                        <Flex
                            direction="column"
                            align="center"
                            gap="3"
                            style={{ textAlign: "center" }}
                        >
                            <Badge size="2" color="violet" variant="soft">
                                ✨ AI-Powered Text Summarization
                            </Badge>
                            <Heading
                                size="8"
                                style={{
                                    background:
                                        "linear-gradient(135deg, var(--mint-11), var(--violet-11))",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                    fontWeight: "900",
                                }}
                            >
                                Smart Text Summarizer
                            </Heading>
                            <Text
                                size="4"
                                color="gray"
                                style={{ maxWidth: "600px" }}
                            >
                                Transform lengthy documents, articles, and texts
                                into concise, meaningful summaries in seconds.
                                Powered by advanced AI technology for accurate
                                and contextual summarization.
                            </Text>
                        </Flex>

                        {/* Features Section */}
                        <Flex
                            direction="row"
                            gap="4"
                            justify="center"
                            wrap="wrap"
                        >
                            <Card
                                size="2"
                                variant="surface"
                                style={{
                                    minWidth: "200px",
                                    textAlign: "center",
                                }}
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    gap="2"
                                    p="3"
                                >
                                    <LightningBoltIcon
                                        width="24"
                                        height="24"
                                        color="var(--violet-9)"
                                    />
                                    <Text weight="bold" size="3">
                                        Lightning Fast
                                    </Text>
                                    <Text size="2" color="gray">
                                        Get summaries in seconds
                                    </Text>
                                </Flex>
                            </Card>
                            <Card
                                size="2"
                                variant="surface"
                                style={{
                                    minWidth: "200px",
                                    textAlign: "center",
                                }}
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    gap="2"
                                    p="3"
                                >
                                    <MagicWandIcon
                                        width="24"
                                        height="24"
                                        color="var(--violet-9)"
                                    />
                                    <Text weight="bold" size="3">
                                        AI-Powered
                                    </Text>
                                    <Text size="2" color="gray">
                                        Advanced AI understanding
                                    </Text>
                                </Flex>
                            </Card>
                            <Card
                                size="2"
                                variant="surface"
                                style={{
                                    minWidth: "200px",
                                    textAlign: "center",
                                }}
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    gap="2"
                                    p="3"
                                >
                                    <LockClosedIcon
                                        width="24"
                                        height="24"
                                        color="var(--violet-9)"
                                    />
                                    <Text weight="bold" size="3">
                                        Secure & Private
                                    </Text>
                                    <Text size="2" color="gray">
                                        Your data stays local
                                    </Text>
                                </Flex>
                            </Card>
                        </Flex>

                        {/* Main Summarizer Component */}
                        <TextSummarizer />

                        {/* Footer & Disclaimer */}
                        <Flex
                            direction="column"
                            align="center"
                            gap="3"
                            style={{ padding: "2rem 0", textAlign: "center" }}
                        >
                            <Text size="2" color="gray">
                                Built with ❤️ using React, Radix UI, and AI
                                technology
                            </Text>
                            <Box
                                style={{
                                    padding: "1rem",
                                    backgroundColor: "var(--gray-2)",
                                    borderRadius: "8px",
                                    border: "1px solid var(--gray-4)",
                                    maxWidth: "600px",
                                }}
                            >
                                <Text
                                    size="1"
                                    color="gray"
                                    style={{ lineHeight: "1.5" }}
                                >
                                    <strong>Educational Disclaimer:</strong>{" "}
                                    This application is developed solely for
                                    educational and demonstration purposes. The
                                    user interface was created with assistance
                                    from GitHub Copilot AI. Please use
                                    responsibly and ensure compliance with your
                                    local data privacy regulations.
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </Theme>
    );
}

export default App;
